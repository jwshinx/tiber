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

ActiveRecord::Schema.define(version: 20140512071641) do

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

end
