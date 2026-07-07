import { Users, User, Stethoscope, Heart } from 'lucide-react';

interface ConnectedUser {
  id: string;
  name: string;
  role: 'family' | 'medical' | 'patient';
  status: 'online' | 'offline';
  lastActive?: string;
}

interface ConnectedUsersProps {
  users: ConnectedUser[];
}

export default function ConnectedUsers({ users }: ConnectedUsersProps) {
  const roleIcons = {
    patient: User,
    family: Heart,
    medical: Stethoscope
  };

  const roleLabels = {
    patient: 'User Inti',
    family: 'Keluarga',
    medical: 'Tenaga Medis'
  };

  const roleColors = {
    patient: 'text-purple-600 bg-purple-50',
    family: 'text-pink-600 bg-pink-50',
    medical: 'text-blue-600 bg-blue-50'
  };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-6 h-6 text-gray-700" />
        <h3 className="text-lg font-semibold text-gray-900">Pengguna Terhubung</h3>
      </div>

      <div className="space-y-3">
        {users.map((user) => {
          const Icon = roleIcons[user.role];
          return (
            <div
              key={user.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${roleColors[user.role]}`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-600">{roleLabels[user.role]}</div>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
                <span className="text-xs text-gray-600">
                  {user.status === 'online' ? 'Online' : user.lastActive}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
