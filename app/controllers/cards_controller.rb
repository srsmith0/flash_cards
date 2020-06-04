class CardsController < ApplicationController
  def index
    @cards = Card.all 

    render component: "Cards", props: { cards: @cards }
  end

  def show
    @card = Card.find(params[:id])

    render component: "Card", props: { card: @card }
  end

  def create
    @card = Card.create(params.require(:card).permit(:question, :answer))
    
    render json: @card
  end


  def destroy
    @card = Card.find(params[:id])
    @card.destroy

    render json: @card 
  end


end
