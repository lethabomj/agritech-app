import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CloudSun, Newspaper, Store, Bug, Tractor } from "lucide-react";

export default function AgriTechPrototype() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Farmer Location Access */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <MapPin className="text-green-600" />
          <div>
            <h2 className="text-lg font-bold">Farmer Map Access</h2>
            <p>Find nearby farms, suppliers & support centers.</p>
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Hub */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold mb-2">Farmer Knowledge Hub</h2>
          <ul className="list-disc pl-5 text-sm">
            <li>Crop calendar & livestock care</li>
            <li>Soil health tips</li>
            <li>Short tutorials & guides</li>
          </ul>
        </CardContent>
      </Card>

      {/* Weather Services */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <CloudSun className="text-blue-500" />
          <div>
            <h2 className="text-lg font-bold">Weather Services</h2>
            <p>Localized forecasts & drought alerts.</p>
          </div>
        </CardContent>
      </Card>

      {/* Marketplace */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Store className="text-orange-500" />
          <div>
            <h2 className="text-lg font-bold">Marketplace</h2>
            <p>Sell or buy farm produce and livestock.</p>
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Newspaper className="text-gray-700" />
          <div>
            <h2 className="text-lg font-bold">Agricultural News</h2>
            <p>Market prices, policy updates & more.</p>
          </div>
        </CardContent>
      </Card>

      {/* Farmer Profile */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-lg font-bold mb-2">Farmer Type</h2>
          <div className="flex gap-2">
            <Button variant="outline">Crop Farmer</Button>
            <Button variant="outline">Livestock Farmer</Button>
            <Button variant="outline">Mixed</Button>
          </div>
        </CardContent>
      </Card>

      {/* Pest Management */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Bug className="text-red-600" />
          <div>
            <h2 className="text-lg font-bold">Pest Management</h2>
            <p>Identify pests & get treatment tips.</p>
          </div>
        </CardContent>
      </Card>

      {/* Input Supplier Locator */}
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Tractor className="text-green-700" />
          <div>
            <h2 className="text-lg font-bold">Nearby Input Sellers</h2>
            <p>Locate seed, fertilizer, & tool suppliers.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
