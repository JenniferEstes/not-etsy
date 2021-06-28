class Business < ApplicationRecord
  has_many :products
  has_many :categories, through: :products

  validates :name, presence: true
end