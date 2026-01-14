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
      return <CloudRain className="h-8 w-8" />;
    case 'sun':
    case 'sunny':
      return <Sun className="h-8 w-8" />;
    default:
      return <Cloud className="h-8 w-8" />;
  }
}

function GlassPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 ${className}`}>
      {children}
    </div>
  );
}

export function HomeView() {
  const [weather] = useState<WeatherData>(mockWeather);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-4xl font-thin text-white">{weather.location}</h1>
        <p className="text-white/70 text-sm mt-1">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>

      {/* Current Weather */}
      <div className="px-6 mb-6">
        <GlassPanel className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-7xl font-thin text-white mb-2">{weather.temp}°</div>
              <div className="text-white/80 text-xl">{weather.condition}</div>
              <div className="text-white/60 text-sm mt-2">H:{weather.high}° L:{weather.low}°</div>
            </div>
            <WeatherIcon condition={weather.condition} />
          </div>
        </GlassPanel>
      </div>

      {/* Weather Details */}
      <div className="px-6 mb-6">
        <GlassPanel className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Droplets className="h-5 w-5 text-white/70" />
              <div>
                <div className="text-white/60 text-xs">Humidity</div>
                <div className="text-white text-lg">{weather.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Wind className="h-5 w-5 text-white/70" />
              <div>
                <div className="text-white/60 text-xs">Wind</div>
                <div className="text-white text-lg">{weather.windSpeed} mph</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Eye className="h-5 w-5 text-white/70" />
              <div>
                <div className="text-white/60 text-xs">Visibility</div>
                <div className="text-white text-lg">{weather.visibility} mi</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Gauge className="h-5 w-5 text-white/70" />
              <div>
                <div className="text-white/60 text-xs">Pressure</div>
                <div className="text-white text-lg">{weather.pressure} mb</div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* 7-Day Forecast */}
      <div className="px-6">
        <h2 className="text-white text-lg font-light mb-3">7-Day Forecast</h2>
        <GlassPanel className="p-4">
          <div className="space-y-3">
            {weather.forecast.map((day, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                <div className="text-white w-12">{day.day}</div>
                <div className="flex items-center space-x-3 flex-1">
                  <WeatherIcon condition={day.icon} />
                  <div className="text-white/70 text-sm flex-1">{day.condition}</div>
                </div>
                <div className="text-white text-sm">
                  <span className="font-semibold">{day.high}°</span>
                  <span className="text-white/60 ml-2">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

    </div>
  );
}
