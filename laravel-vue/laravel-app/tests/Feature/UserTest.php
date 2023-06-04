<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function testItCanShowActiveUser(): void
    {
        Sanctum::actingAs(
            User::factory()->create()
        );

        $this
            ->getJson(route('api.showUser'))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'surname',
                    'email',
                    'password',
                ]
            ]);
    }

    public function testItFailsToShowActiveUserWhenUnauthenticated(): void
    {
        $this
            ->getJson(route('api.showUser'))
            ->assertUnauthorized();
    }

    public function testItCanLogout(): void
    {
        Sanctum::actingAs(
            User::factory()->create()
        );

        $this
            ->getJson(route('api.showUser'))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name',
                    'surname',
                    'email',
                    'password',
                ]
            ]);

        $this
            ->getJson(route('api.logout'))
            ->assertOk();

        $this->assertGuest('web');

        $this
            ->getJson(route('api.showUser'))
            ->assertUnauthorized();
    }
}
