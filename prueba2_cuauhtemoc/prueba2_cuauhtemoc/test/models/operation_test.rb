require 'test_helper'

class OperationTest < ActiveSupport::TestCase
  test "ensuring we can extract the responsible user of an operation" do
  op_done = operations(:one)
  op_done.worker_id = true
  assert op_done.valid?, "All operations must have a worker id"
  end
end
