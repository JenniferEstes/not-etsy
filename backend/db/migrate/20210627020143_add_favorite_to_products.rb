class AddFavoriteToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :favorite, :boolean, default: false
  end
end
