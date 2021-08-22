require 'pdfkit'

namespace :tasks do
  desc "Export CV to PDF"

  task :export_to_pdf do
    kit = PDFKit.new('http://127.0.0.1:4000/wkhtmltopdf')

    file = kit.to_file('./joao_goncalves_cv.pdf')
  end
end
