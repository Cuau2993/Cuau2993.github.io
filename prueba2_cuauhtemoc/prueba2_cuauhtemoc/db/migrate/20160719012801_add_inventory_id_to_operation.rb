class AddInventoryIdToOperation < ActiveRecord::Migration
  def change
    add_column :operations, :inventory_id, :integer
  end
end
