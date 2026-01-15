import { useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';

interface WeatherData {
  location: string;
  temp: number;
  condition: string;
  high: number;
  low: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
  }>;
}

const mockWeather: WeatherData = {
  location: 'San Francisco',
  temp: 72,
  condition: 'Partly Cloudy',
  high: 75,
  low: 58,
  humidity: 65,
  windSpeed: 12,
  visibility: 10,
  pressure: 1013,
  forecast: [
    { day: 'Mon', high: 75, low: 58, condition: 'Partly Cloudy', icon: 'cloud' },
    { day: 'Tue', high: 73, low: 57, condition: 'Cloudy', icon: 'cloud' },
    { day: 'Wed', high: 70, low: 55, condition: 'Rainy', icon: 'rain' },
    { day: 'Thu', high: 68, low: 54, condition: 'Rainy', icon: 'rain' },
    { day: 'Fri', high: 71, low: 56, condition: 'Sunny', icon: 'sun' },
    { day: 'Sat', high: 74, low: 59, condition: 'Sunny', icon: 'sun' },
    { day: 'Sun', high: 76, low: 60, condition: 'Partly Cloudy', icon: 'cloud' },
  ],
};

function WeatherIcon({ condition }: { condition: string }) {
  switch (condition.toLowerCase()) {
    case 'rain':
    case 'rainy':
      return <CloudRain className="h-12 w-12" />;
    case 'sun':
    case 'sunny':
      return <Sun className="h-12 w-12" />;
    default:
      return <Cloud className="h-12 w-12" />;
  }
}

function GlassPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function HomeView() {
  const [weather] = useState<WeatherData>(mockWeather);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 pb-8">
      {/* Header */}
      <div className="px-8 pt-16 pb-8">
        <h1 className="text-4xl font-light text-neutral-900 dark:text-neutral-50 tracking-tight">{weather.location}</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-2">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>

      {/* Current Weather */}
      <div className="px-8 mb-8">
        <GlassPanel className="p-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-8xl font-extralight text-neutral-900 dark:text-neutral-50 mb-3">{weather.temp}°</div>
              <div className="text-neutral-700 dark:text-neutral-300 text-lg mb-2">{weather.condition}</div>
              <div className="text-neutral-500 dark:text-neutral-500 text-sm">H:{weather.high}° L:{weather.low}°</div>
            </div>
            <div className="text-neutral-400 dark:text-neutral-600">
              <WeatherIcon condition={weather.condition} />
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* Weather Details */}
      <div className="px-8 mb-8">
        <GlassPanel className="p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <Droplets className="h-5 w-5 text-neutral-400 dark:text-neutral-600" />
              <div>
                <div className="text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">Humidity</div>
                <div className="text-neutral-900 dark:text-neutral-100 text-xl font-light">{weather.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Wind className="h-5 w-5 text-neutral-400 dark:text-neutral-600" />
              <div>
                <div className="text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">Wind</div>
                <div className="text-neutral-900 dark:text-neutral-100 text-xl font-light">{weather.windSpeed} mph</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Eye className="h-5 w-5 text-neutral-400 dark:text-neutral-600" />
              <div>
                <div className="text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">Visibility</div>
                <div className="text-neutral-900 dark:text-neutral-100 text-xl font-light">{weather.visibility} mi</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Gauge className="h-5 w-5 text-neutral-400 dark:text-neutral-600" />
              <div>
                <div className="text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">Pressure</div>
                <div className="text-neutral-900 dark:text-neutral-100 text-xl font-light">{weather.pressure} mb</div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* 7-Day Forecast */}
      <div className="px-8">
        <h2 className="text-neutral-900 dark:text-neutral-50 text-lg font-light mb-4 tracking-tight">7-Day Forecast</h2>
        <GlassPanel className="p-6">
          <div className="space-y-0">
            {weather.forecast.map((day, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 border-b border-neutral-200/50 dark:border-neutral-800/50 last:border-0">
                <div className="text-neutral-900 dark:text-neutral-100 w-14 text-sm font-light">{day.day}</div>
                <div className="flex items-center space-x-4 flex-1">
                  <div className="text-neutral-400 dark:text-neutral-600">
                    <WeatherIcon condition={day.icon} />
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm flex-1">{day.condition}</div>
                </div>
                <div className="text-neutral-900 dark:text-neutral-100 text-sm font-light">
                  <span>{day.high}°</span>
                  <span className="text-neutral-400 dark:text-neutral-600 ml-3">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

    </div>
  );
}
