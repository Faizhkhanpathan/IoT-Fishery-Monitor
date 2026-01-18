import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { DeviceActivityChart } from "@/components/dashboard/DeviceActivityChart";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { 
  Monitor, 
  Wifi, 
  WifiOff, 
  AlertTriangle,
  Thermometer,
  Droplets,
  Zap,
  Activity
} from "lucide-react";

const Index = () => {
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar activeItem={activeNav} onNavigate={setActiveNav} />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header userName="John Doe" userRole="Admin" />
        
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Grid */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Devices"
              value={24}
              subtitle="+2 this week"
              icon={Monitor}
              iconColor="primary"
            />
            <StatsCard
              title="Online"
              value={21}
              subtitle="87.5% uptime"
              icon={Wifi}
              iconColor="success"
            />
            <StatsCard
              title="Offline"
              value={3}
              subtitle="Check alerts"
              icon={WifiOff}
              iconColor="destructive"
            />
            <StatsCard
              title="Alerts"
              value={5}
              subtitle="2 critical"
              icon={AlertTriangle}
              iconColor="warning"
            />
          </div>

          {/* Chart and Metrics */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <DeviceActivityChart />
            </div>
            
            <div className="space-y-4">
              <MetricCard
                title="Avg Temperature"
                value="24.5°C"
                icon={Thermometer}
                iconColor="destructive"
              />
              <MetricCard
                title="Water Quality"
                value="Good"
                icon={Droplets}
                iconColor="primary"
              />
              <MetricCard
                title="Power Usage"
                value="2.4 kWh"
                icon={Zap}
                iconColor="warning"
              />
              <MetricCard
                title="System Health"
                value="98%"
                icon={Activity}
                iconColor="success"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
