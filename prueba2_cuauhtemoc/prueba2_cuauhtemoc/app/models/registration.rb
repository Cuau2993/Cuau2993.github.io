class Registration < ActiveRecord::Base
	belongs_to :inventory
	after_destroy :callback1
	belongs_to :operation
	after_destroy :callback2

	def callback1
		puts "The piece with series number" + Inventory.series_id + "has been deleted"
	end

	def callback2
		puts "The operation with inventory id" + Operation.inventory_id + "and worker id" + Operation.worker_id + "has been deleted"
	end

end
