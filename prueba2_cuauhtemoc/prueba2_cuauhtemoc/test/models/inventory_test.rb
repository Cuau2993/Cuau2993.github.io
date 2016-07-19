require 'test_helper'

class InventoryTest < ActiveSupport::TestCase
  test "ensuring we can identify the operation for which the inventory piece was used" do
  	operation_employed = operations(:one)
  	operation_employed.inventory_id = true
  	assert operation_employed.valid?, "An inventory id number must exist for an operation"
  end

  def setup
  	@inventory = inventories(:one)
  end

  test "deleting operations when deleting inventory used" do
  	@inventory.destroy
  	assert_empty Operation.where(inventory:@inventory.id)
  end
end
