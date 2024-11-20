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

<Navbar
  light
  expand="fluid"
  container="fluid"
  style="
  background-color: white;
  border: solid 1px #d0d4d4;
  padding: 0
"
>
  <NavbarBrand href="/">
    <h1 style="color:  #fb6f92;">MamaVita</h1>
  </NavbarBrand>
  <Nav class="ms-auto">
    <NavItem>
      <NavLink href="#components/"
        ><h3 style="color:  #fb6f92;">Your Account</h3></NavLink
      >
    </NavItem>
  </Nav>
</Navbar>
