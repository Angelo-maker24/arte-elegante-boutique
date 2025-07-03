import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminLink = () => {
  const { userRole, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return null;
  if (userRole === 'admin') {
    return (
      <Button onClick={() => navigate('/admin')} className="elegant-button">
        Ir al Panel de Administración
      </Button>
    );
  }
  return null;
};
export default AdminLink;