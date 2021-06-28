class RemoveBusinessNameFromProducts < ActiveRecord::Migration[6.1]
  def change
    remove_column :products, :business_name, :string
  end
end
