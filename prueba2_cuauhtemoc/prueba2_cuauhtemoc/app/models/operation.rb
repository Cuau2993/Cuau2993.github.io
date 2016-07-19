class Operation < ActiveRecord::Base
	belongs_to :worker
	has_one :inventory
	has_one :registration, :dependent => :destroy

	scope :pieces, -> (worker_id) {Operation.find(inventory_id).where(worker_id => 1)}

	scope :last_5_ops, -> {Operation.last(5)}

	scope :recent, lambda {where('created_at >= ?', Time.now - 1.day)}	

	scope :unused, -> (inventory_id) {where(:inventory.id => nil)}
end
