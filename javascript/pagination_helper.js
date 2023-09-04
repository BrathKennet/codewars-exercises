/**
For this exercise you will be strengthening your page-fu mastery. 
You will complete the PaginationHelper class, which is a utility class helpful 
for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating 
how many items will be allowed per each page. The types of values contained 
within the collection/array are not relevant.

The following are some examples of how this class is used:

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
helper.page_count() # should == 2
helper.item_count() # should == 6
helper.page_item_count(0) # should == 4
helper.page_item_count(1) # last page - should == 2
helper.page_item_count(2) # should == -1 since the page is invalid

# page_index takes an item index and returns the page that it belongs on
helper.page_index(5) # should == 1 (zero based index)
helper.page_index(2) # should == 0
helper.page_index(20) # should == -1
helper.page_index(-10) # should == -1 because negative indexes are invalid

*/

class PaginationHelper {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount = () => this.collection.length;

  // returns the number of pages
  pageCount = () => Math.ceil(this.collection.length / this.itemsPerPage);

  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  pageItemCount = (pageIndex) => {
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) return -1;
    return this.collection.slice(
      pageIndex * this.itemsPerPage,
      pageIndex * this.itemsPerPage + this.itemsPerPage
    ).length;
  };

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  pageIndex = (itemIndex) => {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    return Math.trunc(itemIndex / this.itemsPerPage);
  };
}