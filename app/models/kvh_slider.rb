class KvhSlider < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  scope :show, -> {where(show: true)}
end