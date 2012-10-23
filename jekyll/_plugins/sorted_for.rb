module Jekyll
  class SortedForTag < Liquid::For
    def render(context)
      _all_pages = context[@collection_name].dup
      all_pages = _all_pages.collect(&:to_liquid)
      
      if @attributes.include?('filter_by')
        filtered_pages = all_pages.reject { |page| page['group'] != @attributes['filter_by'] || !page.include?(@attributes['sort_by']) || (page.include?('show') && !page['show']) }
      else
        filtered_pages = all_pages.reject { |page| !page.include?(@attributes['sort_by']) || (page.include?('show') && !page['show']) }
      end
      filtered_pages.sort_by! { |i| i[@attributes['sort_by']] }
      
      sorted_collection_name = "#{@collection_name}_sorted".sub('.', '_')
      context[sorted_collection_name] = filtered_pages
      @collection_name = sorted_collection_name

      super
    end

    def end_tag
      'endsorted_for'
    end
  end
end

Liquid::Template.register_tag('sorted_for', Jekyll::SortedForTag)