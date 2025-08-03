import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null);

  // 🔁 Load mock users on page load
  const fetchUsers = async () => {
    const data = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Handle Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // Update user
      setUsers(users.map((u) => u.id === editingId ? { ...form, id: editingId } : u));
    } else {
      // Add user
      const newUser = { ...form, id: Date.now() };
      setUsers([...users, newUser]);
    }

    setForm({ name: '', email: '' });
    setEditingId(null);
  };

  // ✏️ Load form with user data
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  // ❌ Remove user
  const handleDelete = async (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="App">
      <h2>User Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
