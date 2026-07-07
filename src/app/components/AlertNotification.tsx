import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';

interface AlertNotificationProps {
  type: 'critical' | 'warning' | 'info';
  message: string;
  patientName: string;
  time: string;
  onDismiss?: () => void;
}

export default function AlertNotification({ type, message, patientName, time, onDismiss }: AlertNotificationProps) {
  const configs = {
    critical: {
      icon: AlertTriangle,
      bgColor: 'bg-red-50 border-red-300',
      iconColor: 'text-red-600',
      textColor: 'text-red-900'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50 border-yellow-300',
      iconColor: 'text-yellow-600',
      textColor: 'text-yellow-900'
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50 border-blue-300',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-900'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`rounded-lg border-2 p-4 ${config.bgColor} mb-3 animate-fade-in`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-6 h-6 ${config.iconColor} mt-0.5 flex-shrink-0`} />

        <div className="flex-1 min-w-0">
          <div className={`font-semibold ${config.textColor} mb-1`}>
            {patientName}
          </div>
          <div className={`text-sm ${config.textColor} opacity-90`}>
            {message}
          </div>
          <div className={`text-xs ${config.textColor} opacity-60 mt-2`}>
            {time}
          </div>
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`${config.iconColor} opacity-60 hover:opacity-100 transition-opacity flex-shrink-0`}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
