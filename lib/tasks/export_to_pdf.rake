# https://stackoverflow.com/questions/31707815/how-to-create-fixed-footer-header-with-pdfkit-in-rails/31708057
# https://wkhtmltopdf.org/usage/wkhtmltopdf.txt

require 'pdfkit'

namespace :tasks do
  desc "Export CV to PDF"

  task :export_to_pdf do
    kit = PDFKit.new(
      'http://127.0.0.1:4000/wkhtmltopdf',
      {
        footer_left: '[CV] João Gonçalves',
        footer_right: '[page] of [topage]',
        footer_font_size: '8',
        footer_spacing: '5',
      }
    )

    file = kit.to_file('./joao_goncalves_cv.pdf')
  end
end
