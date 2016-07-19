class AddSeriesToInventory < ActiveRecord::Migration
  def change
    add_column :inventories, :series, :integer
  end
end
