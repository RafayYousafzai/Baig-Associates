import { Container } from "@mantine/core";
import SectionHeader from "components/Common/SectionHeader";
import BlogsTable from "components/Management/BlogsTable/Index";
import Header from "components/Header";

export default function page() {
  return (
    <>
      <Header admin={true} />
      <Container size={"lg"}>
        <br />
        <SectionHeader
          headerInfo={{
            title: "Blog Management",
            subtitle: "Manage your blogs efficiently",
            description:
              "Here you can manage all your blogs, including editing and deleting.",
          }}
        />
        <br />
        <BlogsTable />
      </Container>
    </>
  );
}
