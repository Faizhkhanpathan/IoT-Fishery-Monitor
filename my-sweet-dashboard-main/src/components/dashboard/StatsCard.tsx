import { useSummary } from "@/hooks/useSummary";

export function StatsCard() {
  const summary = useSummary();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <p>Total Devices</p>
        <p className="text-3xl font-bold">
          {summary?.totalDevices ?? "--"}
        </p>
      </div>

      <div>
        <p>Online</p>
        <p className="text-3xl font-bold text-green-600">
          {summary?.online ?? "--"}
        </p>
      </div>

      <div>
        <p>Offline</p>
        <p className="text-3xl font-bold text-red-500">
          {summary?.offline ?? "--"}
        </p>
      </div>

      <div>
        <p>Alerts</p>
        <p className="text-3xl font-bold text-red-600">
          {summary?.alerts ?? "--"}
        </p>
      </div>
    </div>
  );
}
