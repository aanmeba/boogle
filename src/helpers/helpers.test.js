/* eslint-disable no-undef */
import {
  addEllipsis,
  cleanedData,
  findLastPage,
  formatePublishedDate,
  handleReviews,
  printAuthors,
} from "./helpers";

describe("Testing findLastPage() ", () => {
  it("should return a whole number which is rounded down", () => {
    const totalItems = 4067;
    const maxResults = 30;
    expect(findLastPage(totalItems, maxResults)).toBe(135);
  });
});

describe("Testing addEllipsis()", () => {
  const str =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dicta voluptates iusto repudiandae asperiores deserunt ea voluptas necessitatibus tenetur? Vitae ipsam nam sequi ipsum. Mollitia id eveniet veritatis recusandae alias.";

  it("shouldn't return ellipsis when the given string is shorter than the limit", () => {
    expect(addEllipsis("abc", 5)).toBe("abc");
  });

  it("should return ellipsis based on the arguments", () => {
    expect(addEllipsis(str, 15)).toBe("Lorem ipsum dol...");
    expect(addEllipsis(str, 50).length).toBe(53);
  });
});

describe("Testing printAuthors()", () => {
  const authors = ["Jungah Ahn"];
  it("should return an author if authors array has one element", () => {
    expect(printAuthors(authors)).toBe("Jungah Ahn");
  });

  it("should add 'and' if the authors are two", () => {
    authors.push("Alice Bee");
    expect(printAuthors(authors)).toBe("Jungah Ahn and Alice Bee");
  });

  it("should insert ',' or 'and' depending on the number of authors", () => {
    authors.push("Cathy Dawn");
    expect(printAuthors(authors)).toBe("Jungah Ahn, Alice Bee and Cathy Dawn");
    authors.push("Gwen Hall");
    expect(printAuthors(authors)).toBe(
      "Jungah Ahn, Alice Bee, Cathy Dawn and Gwen Hall"
    );
  });
});

describe("Testing handleReviews()", () => {
  it("should return the given num with 'review' if the num is 1 or 0", () => {
    expect(handleReviews(1)).toBe("1 review");
    expect(handleReviews(0)).toBe("0 review");
  });
  it("should return corresponding string if the num is greather than 1000", () => {
    expect(handleReviews(1001)).toBe("1.00k reviews");
    expect(handleReviews(1111)).toBe("1.11k reviews");
  });
});

describe("Testing formatePublishedDate()", () => {
  it("should return a new date format", () => {
    expect(formatePublishedDate("2023-11-05")).toBe("November 2023");
    expect(formatePublishedDate("2015-01-05")).toBe("January 2015");
    expect(formatePublishedDate("1999")).toBe("1999");
  });
});

describe("Testing cleanedData()", () => {
  const book = {
    id: "abcd",
    saleInfo: { isEbook: false },
    volumeInfo: {
      authors: ["Jungah Ahn", "Alice Bee"],
      averageRating: undefined,
      categories: ["Arts"],
      description: undefined,
      imageLinks: { thumbnail: undefined },
      infoLink: "http://google.com",
      publisher: undefined,
      publishedDate: "2023-11-05",
      title: "JavaScript Master",
      subtitle: undefined,
      pageCount: undefined,
      ratingsCount: undefined,
    },
  };
  it("should have authors property", () => {
    expect(cleanedData(book)).toHaveProperty("authors");
    const cleanedDataResult = cleanedData(book);
    expect(cleanedDataResult.authors).toHaveProperty("authorsInModal");
    expect(cleanedDataResult.authors).toHaveProperty("authorsInList");
    expect(cleanedDataResult.authors).toEqual({
      authorsInModal: "Jungah Ahn and Alice Bee",
      authorsInList: "Jungah Ahn and more",
    });
  });

  it("should format publishingInfo based on publishedData & publisher", () => {
    expect(cleanedData(book)).toHaveProperty("publishingInfo");
    const cleanedDataResult = cleanedData(book);
    expect(cleanedDataResult.publishingInfo).toEqual("November 2023");
    book.volumeInfo.publisher = "_nology";
    const anotherResult = cleanedData(book);
    expect(anotherResult.publishingInfo).toEqual("November 2023 · _nology");
  });
});
