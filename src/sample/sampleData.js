// sampleData.js

export const sampleJava = `// Sample Java Class
public class Root {
    private String name;
    private int age;
    private boolean isActive;
    private Address address;
    private List<String> tags;

    // Getters and setters...
}

class Address {
    private String street;
    private String city;
    private String zip;

    // Getters and setters...
}`;

export const sampleJson = {
  name: "John Doe",
  age: 30,
  isActive: true,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  tags: ["developer", "java", "json"]
};
