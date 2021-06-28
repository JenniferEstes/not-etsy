class AddBusinessNameToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :business_name, :string
  end
end
