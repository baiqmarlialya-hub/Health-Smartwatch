import { User, Phone, MapPin, Calendar, Users } from 'lucide-react';

interface PatientProfileProps {
  name: string;
  age: number;
  gender: string;
  address: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  conditions?: string[];
}

export default function PatientProfile({
  name,
  age,
  gender,
  address,
  phone,
  emergencyContact,
  emergencyPhone,
  conditions = []
}: PatientProfileProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600">{age} tahun · {gender}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div className="text-gray-700">{address}</div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <div className="text-gray-700">{phone}</div>
        </div>

        <div className="border-t pt-3 mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-gray-900">Kontak Darurat</span>
          </div>
          <div className="pl-7 space-y-1">
            <div className="text-gray-700">{emergencyContact}</div>
            <div className="text-gray-600 text-sm">{emergencyPhone}</div>
          </div>
        </div>

        {conditions.length > 0 && (
          <div className="border-t pt-3 mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-gray-900">Riwayat Penyakit</span>
            </div>
            <div className="pl-7 flex flex-wrap gap-2">
              {conditions.map((condition, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
