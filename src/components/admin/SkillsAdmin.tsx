
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Skill {
  id: string;
  category: string;
  skill_list: string[];
  color?: string;
  icon?: string;
  sort_order?: number;
}

const SkillsAdmin = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    category: '',
    skill_list: '',
    color: '',
    icon: '',
    sort_order: ''
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch skills",
        variant: "destructive"
      });
    } else {
      setSkills(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const skillData = {
      category: formData.category,
      skill_list: formData.skill_list.split(',').map(s => s.trim()),
      color: formData.color || null,
      icon: formData.icon || null,
      sort_order: formData.sort_order ? parseInt(formData.sort_order) : null
    };

    let error;
    if (editingSkill) {
      const { error: updateError } = await supabase
        .from('skills')
        .update(skillData)
        .eq('id', editingSkill.id);
      error = updateError;
    } else {
      const { error: insertError } = await supabase
        .from('skills')
        .insert([skillData]);
      error = insertError;
    }

    if (error) {
      toast({
        title: "Error",
        description: `Failed to ${editingSkill ? 'update' : 'create'} skill category`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: `Skill category ${editingSkill ? 'updated' : 'created'} successfully`
      });
      resetForm();
      fetchSkills();
    }
  };

  const deleteSkill = async (id: string) => {
    const { error } = await supabase
      .from('skills')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete skill category",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Skill category deleted successfully"
      });
      fetchSkills();
    }
  };

  const startEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setFormData({
      category: skill.category,
      skill_list: skill.skill_list.join(', '),
      color: skill.color || '',
      icon: skill.icon || '',
      sort_order: skill.sort_order?.toString() || ''
    });
    setIsCreating(true);
  };

  const resetForm = () => {
    setEditingSkill(null);
    setIsCreating(false);
    setFormData({
      category: '',
      skill_list: '',
      color: '',
      icon: '',
      sort_order: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skill Categories</h3>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Skill Category
        </Button>
      </div>

      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>{editingSkill ? 'Edit Skill Category' : 'Create New Skill Category'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Category Name"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
                <Input
                  placeholder="Icon (e.g., Package, Code)"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Skills (comma separated)"
                value={formData.skill_list}
                onChange={(e) => setFormData({ ...formData, skill_list: e.target.value })}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Color (e.g., from-blue-500 to-cyan-500)"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                />
                <Input
                  placeholder="Sort Order (number)"
                  type="number"
                  value={formData.sort_order}
                  onChange={(e) => setFormData({ ...formData, sort_order: e.target.value })}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  {editingSkill ? 'Update' : 'Create'}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{skill.category}</h4>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {skill.skill_list.map((item, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                  {skill.color && (
                    <p className="text-xs text-gray-500 mt-1">Color: {skill.color}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => startEdit(skill)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteSkill(skill.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsAdmin;
