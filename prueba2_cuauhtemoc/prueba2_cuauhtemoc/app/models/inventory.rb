class Inventory < ActiveRecord::Base
	validates_uniqueness_of :series
	validates :series, presence:true
	belongs_to :operation

	scope :unused, -> (Operation.inventory_id) {where(:inventory.id => nil)} 	
end
