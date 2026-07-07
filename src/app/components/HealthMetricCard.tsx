import { Heart, Activity, Droplet, Thermometer, Wind, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface HealthMetricCardProps {
  type: 'heart-rate' | 'blood-pressure' | 'oxygen' | 'temperature' | 'steps' | 'sleep';
  value: string;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'stable';
  lastUpdate?: string;
}

export default function HealthMetricCard({ type, value, unit, status, trend, lastUpdate }: HealthMetricCardProps) {
  const icons = {
    'heart-rate': Heart,
    'blood-pressure': Activity,
    'oxygen': Wind,
    'temperature': Thermometer,
    'steps': TrendingUp,
    'sleep': Droplet
  };

  const statusColors = {
    normal: 'bg-green-50 border-green-200 text-green-700',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    critical: 'bg-red-50 border-red-200 text-red-700'
  };

  const statusIconColors = {
    normal: 'text-green-600',
    warning: 'text-yellow-600',
    critical: 'text-red-600'
  };

  const Icon = icons[type];

  return (
    <div className={`relative rounded-lg border-2 p-4 transition-all ${statusColors[status]}`}>
      {status === 'critical' && (
        <div className="absolute -top-2 -right-2 bg-red-600 rounded-full p-1">
          <AlertTriangle className="w-4 h-4 text-white" />
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <Icon className={`w-8 h-8 ${statusIconColors[status]}`} />
        {trend && (
          <div className="flex items-center">
            {trend === 'up' && <TrendingUp className="w-4 h-4" />}
            {trend === 'down' && <TrendingDown className="w-4 h-4" />}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">{value}</span>
          <span className="text-sm opacity-75">{unit}</span>
        </div>

        <div className="text-sm opacity-75 capitalize">
          {type.replace('-', ' ')}
        </div>

        {lastUpdate && (
          <div className="text-xs opacity-60 mt-2">
            Diperbarui {lastUpdate}
          </div>
        )}
      </div>
    </div>
  );
}
