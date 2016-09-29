module Api
  module V1 
    class FaqsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      
      def index 
        respond_with(Faq.all.order("id DESC"))
      end 
      
      def show 
        respond_with(Faq.find(params[:id]))
      end 
      
      def create 
        @faq = Faq.new(faq_params) 
        if @faq.save 
          respond_to do |format|
            format.json { render json: @faq }
          end 
        end 
      end 
      
      def update 
        @faq = Faq.find(params[:id])
        if @faq.update(faq_params) 
          respond_to do |format| 
            format.json { render json: @faq }
          end 
        end 
      end 
 
      def destroy 
        respond_with Faq.destroy(params[:id]) 
      end 
      
      private
      
      def faq_params 
        params.require(:faq).permit(:question, :answer) 
      end 
      
    end 
  end
end