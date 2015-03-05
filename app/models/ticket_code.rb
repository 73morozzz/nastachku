class TicketCode < ActiveRecord::Base
  attr_accessible :code, :distributor_id, :category, :state_event, :price, :ticket, :afterparty_ticket, :kind

  belongs_to :distributor
  has_one :ticket
  has_one :afterparty_ticket

  scope :activated, -> { where state: :active }

  enum category: {
    listener: 0,
    student: 1,
    organizer: 2,
    sponsor: 3,
    vip: 4,
    speaker: 5,
    participant: 7,
    media: 8,
    volunteer: 9
  }

  # NOTE: refactor it!
  enum kind: {
    conference: "ticket",
    party: "afterparty_ticket"
  }

  state_machine :state, initial: :new do
    state :new
    state :active

    event :activate do
      transition [:new] => :active
    end
  end

  def to_s
    code
  end
end
