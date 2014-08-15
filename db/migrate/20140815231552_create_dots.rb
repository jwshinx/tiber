class CreateDots < ActiveRecord::Migration
  def change
    create_table :dots do |t|
      t.integer :alt, :null => false, :default => 0
      t.boolean :cached, :default => false
      t.string :collection_status, :default => nil
      t.string :deviceUniqueId, :default => nil
      t.float :distance, :default => nil
      t.boolean :downtime_all_day, :default => nil
      t.string :downtime_reason, :default => nil
      t.string :driver_firstname, :default => nil
      t.string :driver_lastname, :default => nil
      t.float :lat, :default => nil
      t.float :lon, :default => nil
      t.string :obd2_ambient_temp, :default => nil
      t.string :obd2_baro_pressure, :default => nil
      t.string :obd2_coolant_temp, :default => nil
      t.string :obd2_engine_runtime, :default => nil
      t.string :obd2_rpm, :default => nil
      t.string :obd2_velocity, :default => nil
      t.string :rig_id, :default => nil
      t.integer :timeZoneOffset, :default => nil
      t.datetime :timestamp, :null => false
      t.string :version, :default => nil

      t.timestamps
    end
  end
end
