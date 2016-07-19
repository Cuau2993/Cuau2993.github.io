require 'test_helper'

class WorkerTest < ActiveSupport::TestCase
  test "worker without name must be invalid" do
  w = workers(:one)
  w.name = nil
  assert_not w.valid?, "A new worker must have a name"
  end

  def setup
  	@worker = workers(:one)
  end

  test "deleting operations when deleting worker" do
  	@worker.destroy
  	assert_empty Operation.where(worker:@worker.id)
  end	
end
