<script>
  import {
    Badge,
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
    InputGroupText,
  } from "@sveltestrap/sveltestrap";
  let isOpen = false;
</script>

<Button class="my-2" outline color="danger" on:click={() => (isOpen = !isOpen)}>
  Customize your own dish!
</Button>

<Collapse {isOpen}>
  <Form>
    <FormGroup floating label="Enter the name the dish">
      <Input placeholder="Enter a value" />
    </FormGroup>

    <FormGroup floating label="Select your protein source">
      <Input type="select" placeholder="Enter a value">
        <option />
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="pork">Pork</option>
      </Input>
    </FormGroup>

    <FormGroup floating label="Select your carb source">
      <Input type="select" placeholder="Enter a value">
        <option />
        <option value="chicken">Noodle</option>
        <option value="beef">Pasta</option>
        <option value="pork">Rice</option>
      </Input>
    </FormGroup>

    <FormGroup floating label="How much sugar is added? (g)">
      <Input type="number" placeholder="Enter a value"></Input>
    </FormGroup>

    <FormGroup floating label="How many serving(s) do you have?">
      <Input type="number" placeholder="Enter a value"></Input>
    </FormGroup>
  </Form>
</Collapse>
