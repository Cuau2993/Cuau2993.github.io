class CreateOperations < ActiveRecord::Migration
  def change
    create_table :operations do |t|
      t.string :job
      t.integer :worker_id

      t.timestamps null: false
    end
  end
end
