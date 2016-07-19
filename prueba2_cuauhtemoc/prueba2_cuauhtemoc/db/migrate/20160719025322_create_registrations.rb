class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.text :description

      t.timestamps null: false
    end
  end
end
