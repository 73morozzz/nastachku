class TicketOrder < Order
  extend Enumerize

  attr_accessible :ticket_type, :order_option_id
  belongs_to :order_option

  enumerize :ticket_type, in: [:first, :second, :full], default: :full

  validates :ticket_type, presence: true

  def cost
    self.items_count * configus.platidoma.ticket_price
  end
end
