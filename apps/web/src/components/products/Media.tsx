import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import { Input } from '@repo/ui/components/base/input';
import { Camera } from 'lucide-react';

export default function Media() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-dashed aspect-3/2 flex justify-center items-center">
          <label
            htmlFor="media"
            className="cursor-pointer inline-flex items-center p-2 rounded bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
          >
            <Camera className="w-5 h-5" />
          </label>
          <Input id="media" type="file" className="hidden" />
        </div>
      </CardContent>
    </Card>
  );
}
