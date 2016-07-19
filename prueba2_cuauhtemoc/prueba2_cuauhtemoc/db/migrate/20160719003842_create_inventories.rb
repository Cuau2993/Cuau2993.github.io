class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.string :item_type
      t.integer :size
      t.text :description

      t.timestamps null: false
    end
  end
end
