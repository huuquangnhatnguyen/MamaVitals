<script lang="ts">
  import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "@sveltestrap/sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar color="danger-subtle" light expand="fluid" container="fluid">
  <NavbarBrand href="/">
    <h1>MamaVitals</h1>
  </NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="#components/"><h3>Log your food</h3></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/"><h3>Overview</h3></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/"><h3>Set your goal</h3></NavLink>
      </NavItem>
      <!-- <Dropdown nav inNavbar>
        <DropdownToggle nav caret>Options</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </Dropdown> -->
    </Nav>
  </Collapse>
</Navbar>
