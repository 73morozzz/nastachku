class RenameDefaultUserTimepadState < ActiveRecord::Migration
  def up
    User.reset_column_information
    User.where(timepad_state: :new).update_all(timepad_state: :unsynchronized)
  end

  def down
    User.update_all({timepad_state: :new}, timepad_state: :unsynchronized)
  end
end
