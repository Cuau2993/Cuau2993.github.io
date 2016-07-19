class Inventory < ActiveRecord::Base
	validates_uniqueness_of :series
	validates :series, presence:true
	belongs_to :operation

	 	
end
