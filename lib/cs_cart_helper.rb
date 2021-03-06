require "cs_cart/client"

module CsCartHelper
  include CsCart::Client
  def auth_cs_cart_user_url(token)
    "https://nastachku.cs-cart.ru/index.php?dispatch=auth.login_stachka&token=#{token}"
  end

  def get_auth_token(user)
    args = {
      first_name: user.first_name,
      last_name: user.last_name,
      stachka_id: user.id.to_s,
      email: user.email,
      key: Digest::MD5.hexdigest("#{user.first_name}|#{user.last_name}|#{user.id}|#{user.email}|#{configus.cs_cart.secret_key}")
    }
    token = get_token args
  end
end
