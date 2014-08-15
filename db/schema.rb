# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140815231552) do

  create_table "dots", force: true do |t|
    t.integer  "alt",                 default: 0,     null: false
    t.boolean  "cached",              default: false
    t.string   "collection_status"
    t.string   "deviceUniqueId"
    t.float    "distance"
    t.boolean  "downtime_all_day"
    t.string   "downtime_reason"
    t.string   "driver_firstname"
    t.string   "driver_lastname"
    t.float    "lat"
    t.float    "lon"
    t.string   "obd2_ambient_temp"
    t.string   "obd2_baro_pressure"
    t.string   "obd2_coolant_temp"
    t.string   "obd2_engine_runtime"
    t.string   "obd2_rpm"
    t.string   "obd2_velocity"
    t.string   "rig_id"
    t.integer  "timeZoneOffset"
    t.datetime "timestamp",                           null: false
    t.string   "version"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "people", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.integer  "birthyear"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "raw_crimes", force: true do |t|
    t.string   "case_number"
    t.string   "description"
    t.datetime "timestamp"
    t.string   "beat"
    t.string   "crime_type"
    t.string   "zip"
    t.string   "address_description"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "accuracy"
    t.string   "url"
    t.boolean  "processed"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "raw_crimes", ["case_number"], name: "index_raw_crimes_on_case_number", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
