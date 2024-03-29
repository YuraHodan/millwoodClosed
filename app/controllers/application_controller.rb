class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :info

  # include ActionView::Helpers::OutputSafetyHelper
  # include ActionView::Helpers::AssetUrlHelper
  # include ActionView::Helpers::TagHelper
  # include ActionView::Helpers::UrlHelper
  # include Cms::Helpers::PagesHelper
  # include Cms::Helpers::MetaDataHelper
  # include Cms::Helpers::NavigationHelper
  # include Cms::Helpers::ActionView::UrlHelper

  def render_not_found
    render template: "errors/not_found.html.slim"
  end
  
  private

   def info
    @footer = FooterInfo.first_or_initialize
    @sertificate = Certificates.first_or_initialize
   end
end
