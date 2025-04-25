import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

const supabaseProvider = {
  provide: 'Supabase',
  useFactory: (config: ConfigService) => {
    const url = config.get<string>('SUPABASE_URL')!;
    const serviceKey = config.get<string>('SUPABASE_SERVICE_KEY')!;
    return createClient(url, serviceKey);
  },
  inject: [ConfigService],
};

@Module({
  imports: [ConfigModule],
  exports: [supabaseProvider],
  providers: [supabaseProvider],
})
export class SupabaseModule {}
